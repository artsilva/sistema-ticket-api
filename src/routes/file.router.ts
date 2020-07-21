import { uploadFile } from './../controllers/file.controller';
import { Router } from 'express';
const router = Router();
var fs = require("fs");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });


// router.use(checkJwt);

router.post('/upload',upload.single('single-file'), function (request, response) {
    console.log(request.file);
});

export default router;