"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[945],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6241:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:5,slug:"/ways-of-working/percy"},l="Percy Visual Testing",p={unversionedId:"Ways of Working/percy",id:"Ways of Working/percy",title:"Percy Visual Testing",description:"Intruduction",source:"@site/src/docs/Ways of Working/percy.md",sourceDirName:"Ways of Working",slug:"/ways-of-working/percy",permalink:"/dsf-manual/ways-of-working/percy",editUrl:"https://github.com/gov-cy/dsf-manual/tree/main/src/docs/Ways of Working/percy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/ways-of-working/percy"},sidebar:"tutorialSidebar",previous:{title:"Team's flow",permalink:"/dsf-manual/ways-of-working/git-flow"},next:{title:"End-to-end developer workflow",permalink:"/dsf-manual/ways-of-working/developerworkflow"}},c=[{value:"Intruduction",id:"intruduction",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Steps to set it up",id:"steps-to-set-it-up",children:[],level:2},{value:"Run percy from command line",id:"run-percy-from-command-line",children:[],level:2},{value:"Github review builds",id:"github-review-builds",children:[{value:"Adding comments",id:"adding-comments",children:[],level:3},{value:"Changes requested workflow",id:"changes-requested-workflow",children:[],level:3}],level:2},{value:"Percy features",id:"percy-features",children:[{value:"Cross-browser visual testing",id:"cross-browser-visual-testing",children:[],level:3},{value:"Responsive visual testing",id:"responsive-visual-testing",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"percy-visual-testing"},"Percy Visual Testing"),(0,i.kt)("h2",{id:"intruduction"},"Intruduction"),(0,i.kt)("p",null,"This document describes how you can setup a Percy project, connect it with a GitHub repository and how to use it from the command line or as part of the review builds."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gov-cy"},"gov-cy")," organization settings on Github "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/percy"},"Percy Github App")," installed for the ",(0,i.kt)("inlineCode",{parentName:"li"},"gov-cy")," organization "),(0,i.kt)("li",{parentName:"ul"},"Access to ",(0,i.kt)("a",{parentName:"li",href:"https://percy.io/"},"Percy")),(0,i.kt)("li",{parentName:"ul"},"nmp package ",(0,i.kt)("a",{parentName:"li",href:"https://docs.percy.io/docs/percyscript"},"@percy/script")," is installed")),(0,i.kt)("h2",{id:"steps-to-set-it-up"},"Steps to set it up"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give permissions on Percy Github App to access the desired repository"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/organizations/gov-cy/settings/installations"},"https://github.com/organizations/gov-cy/settings/installations")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure")," for the Percy App"),(0,i.kt)("li",{parentName:"ul"},"Under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Repository Access")," Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Select repositories")," and select the desired repository."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Github permissions",src:n(1516).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create new project in Percy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to Percy's organization page (",(0,i.kt)("a",{parentName:"li",href:"https://percy.io/a0d81626"},"https://percy.io/a0d81626"),")"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create new project")),(0,i.kt)("li",{parentName:"ul"},"Complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"Project name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Link a repository")," (see image below)"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Project"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Percy create new project",src:n(7891).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set PERCY_TOKEN in repository secret"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"From the Percy project page copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"PERCY_TOKEN")," value.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"PERCY_TOKEN on percy page",src:n(6160).Z})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to repository's settings page in Github, click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Secrets")," (i.e. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gov-cy/dsf-design-system/settings/secrets/actions"},"https://github.com/gov-cy/dsf-design-system/settings/secrets/actions")," URL is different depending on repository)"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"New repository secret")," and enter under ",(0,i.kt)("em",{parentName:"li"},"Name")," ",(0,i.kt)("inlineCode",{parentName:"li"},"PERCY_TOKEN")," and under ",(0,i.kt)("em",{parentName:"li"},"Value")," paste the token value.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Repository secret",src:n(9271).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create npm test script "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In this step you will need to create a test script that will be used to generate the screenshots and add them to Percy. Depending on the technology used (such as Ember, Cypress, Capybara, Storybook e.t.c) Percy has ",(0,i.kt)("em",{parentName:"p"},"how to")," tutorials at ",(0,i.kt)("a",{parentName:"p",href:"https://docs.percy.io/docs/example-apps"},"https://docs.percy.io/docs/example-apps"),". In this tutorial we are using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.percy.io/docs/percyscript"},"PercyScript")," which uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"@percy/script")," npm package.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a test script under ",(0,i.kt)("inlineCode",{parentName:"p"},"test\\scripts\\percy.js"),". "),(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.goto(URL)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"percySnapshot(snapshotName, [options])")," methods to navidate to a page and take snapshots. "),(0,i.kt)("p",{parentName:"li"},"See below a sample test script."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const PercyScript = require('@percy/script');\nconst httpServer = require('http-server');\n\nconst PORT = process.env.PORT_NUMBER || 3000;\nconst TEST_URL = `http://localhost:${PORT}/build`;\n\n// A script to navigate our app and take snapshots with Percy.\nPercyScript.run(async (page, percySnapshot) => {\n  let server = httpServer.createServer();\n  server.listen(PORT);\n\n  console.log(`Server started at ${TEST_URL}`);\n\n  // Take snapshoots on TEST_URL page\n  await page.goto(TEST_URL);\n  await percySnapshot('index',{ widths: [375, 767, 1280] });\n\n  // Take snapshoots of another page\n  await page.goto(TEST_URL + '/my-cool-new-page');\n  await percySnapshot('Cool New Page',{ widths: [375, 767, 1280] });\n\n  server.close();\n});\n\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Create npm script to run test",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add the following in your ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file under ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"test-percy": "percy exec -- node tests/scripts/percy.js"\n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Test your script from the ",(0,i.kt)("inlineCode",{parentName:"p"},"command line")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You first need to set the enviromental variable ",(0,i.kt)("inlineCode",{parentName:"li"},"PERCY_TOKEN"),". For example on Windows ",(0,i.kt)("inlineCode",{parentName:"li"},"set PERCY_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")),(0,i.kt)("li",{parentName:"ul"},"Then simply run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-percy")),(0,i.kt)("li",{parentName:"ul"},"If all goes well a link will appear in the command line where you can view the screenshoots."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a github workflow "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a workflow file under ",(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/percy.yml"),". See below a sample workflow which fires on pull requests and push on main branch.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'name: Percy CI\non: \n  # Trigger the workflow on push or pull request,\n  # but only for the main branch\n  push:\n   branches:\n     - main\n  pull_request:\n    branches:\n     - main\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@master\n      - name: Install\n        run: npm install\n      - name: Percy Test\n        uses: percy/exec-action@master\n        with:\n          command: "node tests/scripts/percy.js"\n        env:\n          PERCY_TOKEN: ${{ secrets.PERCY_TOKEN }}\n\n')),(0,i.kt)("h2",{id:"run-percy-from-command-line"},"Run percy from command line"),(0,i.kt)("p",null,"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"command line")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You first need to set the enviromental variable ",(0,i.kt)("inlineCode",{parentName:"li"},"PERCY_TOKEN"),". For example on Windows ",(0,i.kt)("inlineCode",{parentName:"li"},"set PERCY_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")),(0,i.kt)("li",{parentName:"ul"},"Then simply run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-percy")),(0,i.kt)("li",{parentName:"ul"},"If all goes well a link will appear in the command line where you can view the screenshoots. ")),(0,i.kt)("h2",{id:"github-review-builds"},"Github review builds"),(0,i.kt)("p",null,"Once you've added the app and linked projects with repositories, subsequent Percy builds will show metadata from GitHub and Percy will automatically update the pull request summary if there are visual differences waiting for review."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Github pull request review",src:n(5811).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: By default, Percy approvals aren\u2019t required before merging, but you can enable this feature once you\u2019re ready for it.")),(0,i.kt)("p",null,'Clicking "Details" will take you directly to the Percy build UI showing all visual diffs to be reviewed. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Percy snapshoots page",src:n(4951).Z})),(0,i.kt)("p",null,"Approving a build in Percy sets the Percy status in GitHub to green/successful, so that your team can see that any visual changes were reviewed and approved."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Github pull request review",src:n(1323).Z})),(0,i.kt)("h3",{id:"adding-comments"},"Adding comments"),(0,i.kt)("p",null,"To add a comment and start a comment thread, select the icon in the snapshot header."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Percy comments",src:n(6989).Z})),(0,i.kt)("h3",{id:"changes-requested-workflow"},"Changes requested workflow"),(0,i.kt)("p",null,"In addition to approving snapshots with visual changes, you can also \u201crequest changes.\u201d "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Percy request for change",src:n(7069).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Percy builds request for change",src:n(8140).Z})),(0,i.kt)("h2",{id:"percy-features"},"Percy features"),(0,i.kt)("h3",{id:"cross-browser-visual-testing"},"Cross-browser visual testing"),(0,i.kt)("p",null,"Cross-browser visual testing is available for all Percy customers to effortlessly see visual changes across different browsers."),(0,i.kt)("p",null,"Percy currently supports modern Chrome, Firefox, Edge and Safari browsers, with support for more browsers in the works. Browser upgrades are handled automatically."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Percy cross-browser visual testing",src:n(2005).Z})),(0,i.kt)("h3",{id:"responsive-visual-testing"},"Responsive visual testing"),(0,i.kt)("p",null,"You can perform visual testing for responsive user interfaces, allowing you to automatically detect visual regressions on mobile, tablet, and desktop screens at once."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Percy responsive visual testing",src:n(3497).Z})))}m.isMDXComponent=!0},1516:function(e,t,n){t.Z=n.p+"assets/images/percy1-a22a53c49dbb33c3140abe075ed9e0ec.png"},2005:function(e,t,n){t.Z=n.p+"assets/images/percy10-90197f389287b4ba9150768ded9c3770.gif"},3497:function(e,t,n){t.Z=n.p+"assets/images/percy11-ab4c662b04c67495607b9c133853481f.gif"},6989:function(e,t,n){t.Z=n.p+"assets/images/percy12-e9a225ac9218dab80d11d7a925620d5b.png"},7891:function(e,t,n){t.Z=n.p+"assets/images/percy2-4b033b38f466d441831dfe4207937690.png"},6160:function(e,t,n){t.Z=n.p+"assets/images/percy3-ffbc0701dd408b845259632e8e22483e.png"},9271:function(e,t,n){t.Z=n.p+"assets/images/percy4-52377557f48e8dd8677ec66307b3d97c.png"},4951:function(e,t,n){t.Z=n.p+"assets/images/percy5-6f355397f427faec16551bab1f2edcde.png"},5811:function(e,t,n){t.Z=n.p+"assets/images/percy6-4b9a846ff601405886f5df88bafadfd6.png"},1323:function(e,t,n){t.Z=n.p+"assets/images/percy7-c8f3047aab9f5d07af9bd7a6acf51187.png"},7069:function(e,t,n){t.Z=n.p+"assets/images/percy8-0eb86c791c7cebd520a6f6132af002a5.png"},8140:function(e,t,n){t.Z=n.p+"assets/images/percy9-b94a81b6425d73ec2c33fc49f959e8c9.png"}}]);