import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class HttpService {
  private readonly baseUrl = 'https://www.appiyo.com/ProcessStore/d/workflows';


  constructor(private http: HttpClient) {}

  post(workflowId: string, projectId:string, processId: string, data: any) {
    const processVariables = {
      processId: processId,
      ProcessVariables: data,
      workflowId,
      projectId
    };

    const body = new HttpParams().append(
      "processVariables",
      JSON.stringify(processVariables)
    );

    return this.http.post(
      `${this.baseUrl}/${workflowId}/execute?projectId=${projectId}`,
      body
    );

  }
}
