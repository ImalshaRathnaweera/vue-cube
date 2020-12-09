cube(`Zone`, {
  sql: `SELECT * FROM bank_schema.zone`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [zoneName]
    }
  },
  
  dimensions: {
    zoneName: {
      sql: `zone_name`,
      type: `string`
    },
     zoneId:{
      sql: `zone_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
