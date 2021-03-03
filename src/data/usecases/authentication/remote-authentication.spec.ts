import { HttpPostClient } from "@/data/protocols/http/httpPostClient";
import { RemoteAuthentication } from "./remote-authentication";

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post (url: string): Promise<void> {
        this.url = url;

        return Promise.resolve()
      }
    }

    const url = 'http://test.com'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})