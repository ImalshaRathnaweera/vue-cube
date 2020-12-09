cube(`Sectors`, {
  sql: `SELECT * FROM bank_schema.sectors`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    sectorsId:{
      sql: `sector_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
