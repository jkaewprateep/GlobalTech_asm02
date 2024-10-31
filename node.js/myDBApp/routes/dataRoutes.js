const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
// const logger = require('../logger');

//

// Get all records
router.get('/', async (req, res, next) => {
    // logger.info('/ called');
    try {
        const db = await connectToDatabase();

        const collection = db.collection("statistics");
        const datarecords = await collection.find({},).toArray();
        res.json(datarecords);
        console.log(datarecords);
    } catch (e) {
        // logger.console.error('[error: ]]', e)
        console.log("[error: ]]", e);
        next(e);
    }
});

// Get a single record by ID
router.get('/:order', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("statistics");
        const order = req.params.order;

        console.log("log", order);

        const datarecords = await collection.findOne({ order: Number(order) });

        if (!datarecords) {
            return res.status(404).send("Record not found.");
        }

        res.json(datarecords);
    } catch (e) {
        next(e);
    }
});


// Add a new gift
router.post('/', async (req, res, next) => {

    console.log( "123" )

    try {
        const db = await connectToDatabase();
        const collection = db.collection("statistics");

        console.log( "req.body", req.body);
        // console.log( "req.body", req.body);

        // const datarecords = await collection.insertOne(req.body);

        let datarecords = await collection.findOne({ order: 1 });
        // let datarecords = await collection.findOne({ order: req.body.order });
        console.log( "length: ", datarecords )

        // const datarecords = await collection.findOneAndUpdate(req.body);

        if ( datarecords ){
            // found at least one record
            // update record
            // datarecords = await collection.updateOne({order: req.body.order}, 
            //     {stockname:"ABCD"}, function (err, docs) {
            //     if (err){
            //         console.log(err)
            //     }
            //     else{
            //         console.log("Updated Docs : ", docs);
            //     }
            // });
            // res.status(201).json(req.body);


            try{
                datarecords = await  collection.findOneAndUpdate(
                    { order: 1 },
                    // { order: req.body.order },
                    { $set: { "stockname": req.body.stockname, 
                        "amountof_records_01": req.body.amountof_records_01, "YP80_01": req.body.YP80_01, "YP50_01": req.body.YP50_01, "YP20_01": req.body.YP20_01,
                        "pYP80_01" : req.body.pYP80_01, "pYP50_01" : req.body.pYP50_01, "pYP20_01" : req.body.pYP20_01, 
                        "amountof_records_02": req.body.amountof_records_02, "YP80_02": req.body.YP80_02, "YP50_02": req.body.YP50_02, "YP20_02": req.body.YP20_02,
                        "pYP80_02" : req.body.pYP80_02, "pYP50_02" : req.body.pYP50_02, "pYP20_02" : req.body.pYP20_02,
                        "amountof_records_03": req.body.amountof_records_03, "YP80_03": req.body.YP80_03, "YP50_03": req.body.YP50_03, "YP20_03": req.body.YP20_03,
                        "pYP80_03" : req.body.pYP80_03, "pYP50_03" : req.body.pYP50_03, "pYP20_03" : req.body.pYP20_03,
                        "amountof_records_04": req.body.amountof_records_04, "YP80_04": req.body.YP80_04, "YP50_04": req.body.YP50_04, "YP20_04": req.body.YP20_04,
                        "pYP80_04" : req.body.pYP80_04, "pYP50_04" : req.body.pYP50_04, "pYP20_04" : req.body.pYP20_04
    
                    } },{ upsert: true, new: true }, 
                );
            }
            catch(error){
                res.status(403).json(error.message);
            }

            

            // console.log( "length2: ", datarecords )


            // {"order":1,"stockname":"SQQQ","amountof_records_01":123,"YP80_01":0.5,"pYP80_01":0.8,"YP50_01":1.3,"pYP50_01":4.5,"YP20_01":0.8,"pYP20_01":1.3,"amountof_records_02":484,"YP80_02":0.6,"pYP80_02":1,"YP50_02":1.8,"pYP50_02":4.8,"YP20_02":3,"pYP20_02":1.2,"amountof_records_03":100,"YP80_03":1.5,"pYP80_03":2.1,"YP50_03":3.2,"pYP50_03":1,"YP20_03":0.6,"pYP20_03":0.3,"amountof_records_04":138,"YP80_04":1.7,"pYP80_04":2.5,"YP50_04":4,"pYP50_04":1.4,"YP20_04":0.9,"pYP20_04":0.3}

            res.status(201).json(req.body);
        }
        else {
            // cannot find any record
            // insert the record 
            datarecords = await collection.insertOne(req.body);
            if ( datarecords ){
                res.status(200).json(datarecords);
            }
            else{
                res.status(404).json([]);
            }            
        }

        // res.status(201).json(req.body);

        // res.status(201).json(datarecords.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;