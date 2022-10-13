> show dbs
admin           0.000GB
config          0.000GB
employee        0.000GB
human_resource  0.000GB
humanresource   0.000GB
local           0.000GB
test            0.000GB
> use humanresource
switched to db humanresource
>  db.employee.find()
{ "_id" : ObjectId("6346c9ef114a114d7bf474f5"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f6"),
 "firstName" : "Rohan", 
"lastName" : "Jame",
 "salary" : "30000", 
 "department" : "Technical",
  "lastCompany" : "Y", 
 "lastSalary" : "15000", 
 "overallExp" : "1", 
 "contactInfo" : "1234567860", 
 "yearGrad" : "2015",
  "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f7"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f8"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f9"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fa"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fb"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fc"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fd"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fe"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474ff"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf47500"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf47501"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("63481d6d50e5330852b0e17e"), "firstName" : "sao", "lastName" : "avika", "salary" : 30000, "department" : "sales", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
{ "_id" : ObjectId("63481d6d50e5330852b0e17f"), "firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "EEE" }
{ "_id" : ObjectId("63481d6d50e5330852b0e180"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : 30000, "department" : "Technical", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 1, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
{ "_id" : ObjectId("63481d6d50e5330852b0e181"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallexp" : 1, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "ECE" }
{ "_id" : ObjectId("63481dd450e5330852b0e182"), "firstName" : "sao", "lastName" : "avika", "salary" : 30000, "department" : "sales", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
{ "_id" : ObjectId("63481dd450e5330852b0e183"), "firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "EEE" }
{ "_id" : ObjectId("63481dd450e5330852b0e184"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : 30000, "department" : "Technical", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 1, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
Type "it" for more
> db.employee.find().pretty()
{
        "_id" : ObjectId("6346c9ef114a114d7bf474f5"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474f6"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474f7"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474f8"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474f9"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474fa"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474fb"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474fc"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474fd"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474fe"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf474ff"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf47500"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6346c9ef114a114d7bf47501"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63481d6d50e5330852b0e17e"),
        "firstName" : "sao",
        "lastName" : "avika",
        "salary" : 30000,
        "department" : "sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 2,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("63481d6d50e5330852b0e17f"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallexp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradstream" : "EEE"
}
{
        "_id" : ObjectId("63481d6d50e5330852b0e180"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("63481d6d50e5330852b0e181"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallexp" : 1,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradstream" : "ECE"
}
{
        "_id" : ObjectId("63481dd450e5330852b0e182"),
        "firstName" : "sao",
        "lastName" : "avika",
        "salary" : 30000,
        "department" : "sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 2,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("63481dd450e5330852b0e183"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallexp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradstream" : "EEE"
}
{
        "_id" : ObjectId("63481dd450e5330852b0e184"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}

> db.employee.find({overallExp:{$gte:"2"}})
{ "_id" : ObjectId("6346c9ef114a114d7bf474f5"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f8"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f9"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fc"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fd"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf47500"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf47501"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
> db.employee.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
{ "_id" : ObjectId("6346c9ef114a114d7bf474f5"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474f9"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf474fd"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("6346c9ef114a114d7bf47501"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
> db.employee.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
>