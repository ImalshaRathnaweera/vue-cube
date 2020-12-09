cube(`Region`, {
  sql: `SELECT * FROM bank_schema.region`,
  
  joins: {
    Zone: {
      sql: `${CUBE}.zone_id = ${Zone}.zone_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [regionName]
    }
  },
  
  dimensions: {
    regionName: {
      sql: `region_name`,
      type: `string`
    },
    regionId:{
      sql: `region_id`,
      type: `number`,
      primaryKey: true
    }
    
  }
});
