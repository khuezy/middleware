# Standalone Middleware Bug Repro

1) `git clone git@github.com:khuezy/middleware.git`
2) `cd middleware`
3) `npm i`
4) `npm run dev` (click on the "about" or "another" link and see they are properly redirected/rewritten)
4b) kill dev process
5) `npm run build` (build the standalone app)
6) `npx --package @sladg/nextjs-lambda next-utils pack` (press enter to install app, then will bundle the zip resources)
7) `npx --package @sladg/nextjs-lambda next-utils deploy --stackName=middleware` (this will deploy standalone to AWS, copy the outputted cloudfront url)
8) go to the cloudfront url
9) Click on "about", notice that it does not go to "/redirected", instead it just goes to "/about"
10) Refresh your browser, notice how it *does* redirect to '/redirected'

The deployment uses: https://github.com/sladg/nextjs-lambda
