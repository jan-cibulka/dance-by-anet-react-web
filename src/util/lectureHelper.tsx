import { BlobServiceClient } from "@azure/storage-blob";
import { Lecture } from "../model/lecture";

export async function AddLecture(){
    var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
    const blobServiceClient =  BlobServiceClient.fromConnectionString(blobSasUrl)

    const containerClient = blobServiceClient.getContainerClient("userdata");

    var lecture : Lecture= {description:"description 1",name: "name 1", recommendedParticipans:32, registeredParticipans:[], start: Date.now().toString()}

    const content = JSON.stringify(lecture)
    const blobName = lecture.name + ".json";
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

  }

  export async function GetAllLectures(){
    var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
    const blobServiceClient =  BlobServiceClient.fromConnectionString(blobSasUrl)

    const containerClient = blobServiceClient.getContainerClient("userdata");

    let i = 1;
    for await (const blob of containerClient.listBlobsFlat()) {
      console.log(`Blob ${i++}: ${blob.name}`);
    }

  }