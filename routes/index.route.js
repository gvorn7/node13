const express = require('express');
const router = express.Router();

const masterRequestsController = require('../controllers/masterRequestsController');
const docRequestsController = require('../controllers/docRequestsController');
const memberController = require('../controllers/memberController');

router.post('/insert_req', masterRequestsController.create_MasterRequest);
router.get('/get_req', masterRequestsController.get_MasterRequests);
router.get('/get_req/:Req_ID', masterRequestsController.get_MasterRequestById);
router.put('/req/:Req_ID', masterRequestsController.update_MasterRequest);
router.delete('/req/:Req_ID', masterRequestsController.delete_MasterRequest);

router.post('/create', docRequestsController.create_DocRequest);
router.get('/get_docreq', docRequestsController.get_DocRequests);
router.get('/get_docreq/:Doc_No', docRequestsController.get_DocRequestById);
router.put('/update_docreq/:Doc_No', docRequestsController.update_DocRequestByID);
router.delete('/delete_docreq/:Doc_No', docRequestsController.delete_DocRequestByID);

router.get('/get_members',memberController.get_mem);
router.get('/get_members/:Emp_Code',memberController.get_memByEmp_Code);

module.exports = router;

