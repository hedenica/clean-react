import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct url', async () => {


    const url = 'http://test.com'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})