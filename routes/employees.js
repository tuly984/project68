const express = require('express');
const router = express.Router();
const {Employee, validator} = require('../models/employee');
const validate =require('../middleware/validate');
const isValidObjectId = require('../middleware/isValidObjectld');
const asyncHandler = require('../middleware/asyncHandler');


//create an employee
router.post("/", validate(validator), asyncHandler(async(req, res) => {
    await Employee(req.body).save();
    res.status(200).send("Employee created successfully")
})
);

//get all employees

router.get(
    "/",
    asyncHandler(async(req, res) => {
        const employees = await Employee.find();
        res.send(employees)
    })
)

//get employee by id
router.get(
    "/:id",
    isValidObjectId,
    asyncHandler(async (req, res) => {
        const employee = await Employee.findById(req.params.id);
        res.send(employee);
    })
)

//update employee details
router.put(
    "/:id",
    [isValidObjectId, validate(validator)],
    asyncHandler(async(req, res) => {
        await Employee.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.status(200).send("update successfully")
    })
)

//delete employee
router.delete(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).send("Employee deleted successfully")

    })
)

module.exports = router;