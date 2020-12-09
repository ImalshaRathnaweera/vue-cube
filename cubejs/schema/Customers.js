cube(`Customers`, {
  sql: `SELECT * FROM bank_schema.customers`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, dateOfBirth]
    }
  },
  
  dimensions: {
    landPhoneNo: {
      sql: `land_phone_no`,
      type: `string`
    },
    
    nic: {
      sql: `nic`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    dateOfBirth: {
      sql: `date_of_birth`,
      type: `time`
    },
    customersId:{
      sql: `customer_id`,
      type: `number`,
      primaryKey: true
    }
    
  }
});
