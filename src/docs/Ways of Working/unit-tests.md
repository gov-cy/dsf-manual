---
sidebar_position: 6
slug: /ways-of-working/unit-tests
---



# UNIT TESTING - A SHORT GUIDE  

Unit testing (UT) involves the development of the smallest possible tests which eventually ensure the integrity of the SUT 
(System Under Test). For example tests include checking that the produced html is the expected one or ensuring that τhe 
clicking of buttons result in an expected behavior. In unit testing we are not usually concerned in getting real results 
from databases, APIs etc. That type of testing is called Integration Testing (I&T). When we are dealing with integrating the application with other software components like APIs , browser storage, authorization and others we usually do what is called as mocking the behavior of those functionalities. As an example of UT see the following: 

```
    [Fact]
    public void GovCy_Button_Check_Functionality()
    {
        using var ctx = new TestContext();
        var cut = ctx.Render(@<Govcy_Button ButtonTetxt = "Press" ButtonType = "submit" />

    );
        var buttonElement = cut.Find("button");
        Assert.Equal(1, cut.RenderCount);
    }

```
The above test ensures that the button element in the DSF made Blazor component <GovCy_Button>  is indeed  a submit button. This makes sure that in future when a developer either by accident or by design changes the button type, the change will be documented as the UT will flag this as a failed test. 
Another example of UT is shown below:  
```
[Fact]
    public void  MobileService_Mock_Http_Check_02()
    {

        var httpMessageHandlerMock = new Mock<HttpMessageHandler>();

        HttpResponseMessage httpResponseMessage = new()
            {

                Content = JsonContent.Create(new
                {
                    Succeeded = true
                })

        };


        httpMessageHandlerMock
        .Protected()
        .Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>())
        .ReturnsAsync(httpResponseMessage);

        var httpClient = new HttpClient(httpMessageHandlerMock.Object)
        {
            BaseAddress = new Uri("https://dsf-api-dev.dmrid.gov.cy/api/v1/")
        };

        CheckMobile checkMobile = new (httpClient);

        var result =  checkMobile.IsMobileNumberValid("99314344", true);

        Assert.True( Convert.ToBoolean( result));


    }
```

Here we are mocking the behavior of an HttpClient API call.  This is essential since in UT we should not be concerned in calling the real API and even sometimes we will have no access to the API . Testing real APIs is done in Integration  Testing.
DSF has setup the UT infrastructure as found in the updated solution structure in GitHub (govcy-blazor-repo). Unit tests are developed in a separate project in the same solution as the SUT in Visual Studio or VS Code.  
The following frameworks were used to develop the UT infrastructure:


1. **BUnit** – A framework specifically designed for the .net Blazor framework. 
2. **XUnit** – A base testing framework required for BUnit to work.
3. **FakeItEasy**– A mocking framework to mock services like http calls, browser storage etc.

It is emphasized here that UT will be written by the developer each time a change is made in the application. It has been agreed that the developer implementing the change in the application will be also responsible implementing the UT.

