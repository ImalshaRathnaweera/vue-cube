cube(`Transaction`, {
  sql: `SELECT * FROM bank_schema.transaction`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [transactionDate]
    }
  },
  
  dimensions: {
    transactionType: {
      sql: `transaction_type`,
      type: `string`
    },
    
    transactionDate: {
      sql: `transaction_date`,
      type: `time`
    },
    transactionId:{
      sql: `transaction_id`,
      type: `number`,
      primaryKey: true
    }
    
  }
});
