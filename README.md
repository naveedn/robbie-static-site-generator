# Hackathon Project

 See if there is a way to build an html templating system that uses 0 dependencies


# Results

Yes, but you gotta use a lot of evals to take advantage of tagged string literals

# TODO:
- [ ] modify generator.js so that all readFile Promise objects are resolved before next promise fires
- [ ] create new pages dir every time generator.js is invoked
- [ ] write all updated template files to the pages/dir
