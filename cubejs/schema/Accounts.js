cube(`Accounts`, {
  sql: `SELECT * FROM bank_schema.accounts`,
  
  joins: {
    Branch: {
      sql: `${CUBE}.branch_id = ${Branch}.branch_id`,
      relationship: `belongsTo`
    },
    
    Customers: {
      sql: `${CUBE}.customer_id = ${Customers}.customer_id`,
      relationship: `belongsTo`
    },
    
    Sectors: {
      sql: `${CUBE}.sector_id = ${Sectors}.sector_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
  },
  
  dimensions: {
    accountBalance: {
      sql: `account_balance`,
      type: `string`
    },
    
    accountType: {
      sql: `account_type`,
      type: `string`
    },
    
    accountNumber:{
      sql: `account_no`,
      type: `number`,
      primaryKey: true
    }
    
  
  }
});
