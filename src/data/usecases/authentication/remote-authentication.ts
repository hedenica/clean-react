import { HttpPostClient } from '../../protocols/http/httpPostClient'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient  
  ) {}

  async auth (): Promise<void> {
    await this.HttpPostClient.post(this.url)
  }
}