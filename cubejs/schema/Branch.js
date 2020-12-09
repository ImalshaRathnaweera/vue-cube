cube(`Branch`, {
  sql: `SELECT * FROM bank_schema.branch`,
  
  joins: {
    Region: {
      sql: `${CUBE}.region_id = ${Region}.region_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [branchName]
    }
  },
  
  dimensions: {
    address: {
      sql: `address`,
      type: `string`
    },
    
    branchName: {
      sql: `branch_name`,
      type: `string`
    },
    
    phoneNo: {
      sql: `phone_no`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    branchNumber:{
      sql: `branch_id`,
      type: `number`,
      primaryKey: true,
      shown: true
  
    }
  },
  segments:{
    regiondescription: {
      sql: `${CUBE}.region_id = '5' or ${CUBE}.region_id = '6'`,

    }
  }
});
