import { BlobServiceClient } from "@azure/storage-blob";
import { Lecture } from "../model/lecture";

export async function AddLecture(lecture: Lecture) {
  
  var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)

  const containerClient = blobServiceClient.getContainerClient("userdata");
  
  const content = JSON.stringify(lecture)
  const blobName = lecture.name + ".json";
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

}

export async function DeleteLecture(blobName : string) {
  var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)
  const containerClient = blobServiceClient.getContainerClient("userdata");
  await containerClient.getBlockBlobClient(blobName).deleteIfExists()
}

export async function GetAllLectures(): Promise<Lecture[]> {
  var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)

  const containerClient = blobServiceClient.getContainerClient("userdata");

  var lectures :Lecture[] = [];
  for await (const blob of containerClient.listBlobsFlat()) {
    var blobClient = containerClient.getBlockBlobClient(blob.name);
    var downloadBlobResponse= await blobClient.download();
    
    const downloaded = await blobToString(await downloadBlobResponse.blobBody);
    var parsedLecture = JSON.parse(downloaded);

    lectures.push(parsedLecture);
  }
  return lectures;
}

export async function GetLecture(blobName: string): Promise<Lecture> {
  var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)
  const containerClient = blobServiceClient.getContainerClient("userdata");
  var downloadBlobResponse= await containerClient.getBlockBlobClient(blobName).download();
  const downloaded = await blobToString(await downloadBlobResponse.blobBody);
  var parsedLecture = JSON.parse(downloaded);
  return parsedLecture;
}

async function blobToString(blob: any) : Promise<any> {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onloadend = (ev :ProgressEvent<FileReader>)  => {
      resolve(ev.target!.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(blob);
  });
}