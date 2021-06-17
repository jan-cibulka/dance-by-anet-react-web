import { BlobServiceClient } from "@azure/storage-blob";
import { Lecture } from "../model/lecture";

const blobSasUrl = "SharedAccessSignature=sv=2020-04-08&ss=btqf&srt=sco&st=2021-06-17T12%3A07%3A36Z&se=2023-06-17T17%3A22%3A00Z&sp=rwdxftlacup&sig=VggHWnXVlR1jzrzXnnAp6TXkTC95svF4e2yIoMjE4LY%3D;BlobEndpoint=https://dbanet.blob.core.windows.net/;FileEndpoint=https://dbanet.file.core.windows.net/;QueueEndpoint=https://dbanet.queue.core.windows.net/;TableEndpoint=https://dbanet.table.core.windows.net/;"
const containerName = "lectures";

export async function AddLecture(lecture: Lecture) {

  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)

  const containerClient = blobServiceClient.getContainerClient(containerName);

  const content = JSON.stringify(lecture)
  const blobName = lecture.name + ".json";
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

}

export async function AddContainer() {

  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)
  const containerName = `newcontainer${new Date().getTime()}`;
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const createContainerResponse = await containerClient.create();
  console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);
}

export async function DeleteLecture(blobName: string) {

  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)
  const containerClient = blobServiceClient.getContainerClient(containerName);
  await containerClient.getBlockBlobClient(blobName).deleteIfExists()
}

export async function GetLecturesList() {

  console.log(blobSasUrl);

  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)

  const containerClient = blobServiceClient.getContainerClient(containerName);


  for await (const blob of containerClient.listBlobsFlat()) {
    var blobClient = containerClient.getBlockBlobClient(blob.name);

  }


}

export async function GetAllLectures(): Promise<Lecture[]> {

  const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)

  const containerClient = blobServiceClient.getContainerClient(containerName);

  var lectures: Lecture[] = [];
  for await (const blob of containerClient.listBlobsFlat()) {
    var blobClient = containerClient.getBlockBlobClient(blob.name);
    var downloadBlobResponse = await blobClient.download();

    const downloaded = await blobToString(await downloadBlobResponse.blobBody);
    var parsedLecture = JSON.parse(downloaded);

    lectures.push(parsedLecture);
  }
  return lectures;
}

export async function GetLecture(blobName: string): Promise<Lecture> {
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(blobSasUrl)
    const containerClient = blobServiceClient.getContainerClient(containerName);
    var downloadBlobResponse = await containerClient.getBlockBlobClient(blobName).download();
    const downloaded = await blobToString(await downloadBlobResponse.blobBody);
    var parsedLecture = JSON.parse(downloaded);
  }
  catch (e) {

    console.log(e);
    var parsedLecture = null;
  }

  return parsedLecture;
}

async function blobToString(blob: any): Promise<any> {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onloadend = (ev: ProgressEvent<FileReader>) => {
      resolve(ev.target!.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(blob);
  });
}