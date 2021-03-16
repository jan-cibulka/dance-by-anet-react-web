import React from "react"
import { withAuth0 } from "@auth0/auth0-react"
import { Button } from "react-bootstrap";
import { BlobServiceClient } from "@azure/storage-blob";


export class Account extends React.Component<{ auth0: any }> {


  render(): JSX.Element {
    console.log(this.props.auth0);
    if (this.props.auth0.isAuthenticated) {
      return (
        <div className="textBox">
          Účet {this.props.auth0.user.nickname ? <>{this.props.auth0.user.nickname}</> : <>{this.props.auth0.user.name}</>}
          <br />
          Email {this.props.auth0.user.email}
          <br />
          <Button onClick={this.doStuff}>Tlacitko</Button>
        </div>
      )
    }
    return <div></div>;
  }

  async doStuff(){
    var blobSasUrl = "SharedAccessSignature=sv=2019-12-12&ss=btqf&srt=sco&st=2021-03-16T14%3A41%3A48Z&se=2021-05-17T13%3A41%3A00Z&sp=rwdlacup&sig=4yeIKVXYP7UiRgC4fIM9%2B5tTkHwvOI2QXNEHlaDjtLs%3D;BlobEndpoint=https://dancebyanet.blob.core.windows.net/;FileEndpoint=https://dancebyanet.file.core.windows.net/;QueueEndpoint=https://dancebyanet.queue.core.windows.net/;TableEndpoint=https://dancebyanet.table.core.windows.net/;"
    const blobServiceClient =  BlobServiceClient.fromConnectionString(blobSasUrl)

    const containerClient = blobServiceClient.getContainerClient("userdata");

    const content = "Hello world!";
    const blobName = "newblob" + new Date().getTime();
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

  }

}
export default withAuth0(Account)


