<template>
  <v-container fluid class="text-center background pa-0">
    <query-builder :cubejs-api="cubejsApi" :query="query" style="width: 100%">
      <template
        v-slot:builder="{
          measures,
          setMeasures,
          availableMeasures,
          dimensions,
          setDimensions,
          availableDimensions,
          segments,
          setSegments,
          availableSegments,
        }"
      >
        <v-container fluid class="pa-4 pa-md-8 pt-6 background-white">
          <v-row>
            <v-col cols="12" md="2">
              <v-select
                multiple
                label="Measures"
                outlined
                hide-details
                :value="measures.map((i) => i.name)"
                @change="setMeasures"
                :items="availableMeasures.map((i) => i.name)"
              />
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                multiple
                label="Dimensions"
                outlined
                hide-details
                :value="dimensions.map((i) => i.name)"
                @change="setDimensions"
                :items="availableDimensions.map((i) => i.name)"
              />
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                multiple
                label="Segments"
                outlined
                hide-details
                :value="segments.map((i) => i.name)"
                @change="setSegments"
                :items="availableSegments.map((i) => i.name)"
              />
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot="{ resultSet }">
        <div class="pa-4 pa-md-8" v-if="resultSet">
          <div class="border-light pa-4 pa-md-12">
            <line-chart legend="bottom" :data="series(resultSet)"></line-chart>
          </div>
        </div>
        <div class="pa-4 pa-md-8" v-if="resultSet">
          <div class="border-light pa-4 pa-md-12">
            <bar-chart legend="bottom" :data="series(resultSet)"></bar-chart>
          </div>
        </div>
        <div class="pa-4 pa-md-8" v-if="resultSet">
          <div class="border-light pa-4 pa-md-12">
            <area-chart legend="bottom" :data="series(resultSet)"></area-chart>
          </div>
        </div>

        <!-- <div class="pa-4 pa-md-8" v-if="resultSet">
          <div class="border-light pa-4 pa-md-12">
            <pie-chart
              legend="bottom"
              :data="datasets"
              :donut="true"
            ></pie-chart>
          </div>
        </div> -->
      </template>
    </query-builder>
  </v-container>
</template>

<script>
import cubejs from "@cubejs-client/core";
import { QueryBuilder } from "@cubejs-client/vue";

const cubejsApi = cubejs("SILENT", {
  apiUrl: `http://localhost:4000/cubejs-api/v1`,
});

export default {
  name: "HelloWorld",

  components: {
    QueryBuilder,
  },
  data: () => {
    const query = {
      limit: 100,
    };
    // const datasets ={
    //   measures:["Accounts.count","Customers.count"],
    //   timeDimensions:[
    //     {
    //       dimesion:"Accounts.accountType"
    //     }
    //   ]
    // }

    return {
      cubejsApi,
      query,
      datasets: [
        ["hdfghj",20],
        ["Feb", 10],
        ["jsks",34],
        ["iucjwbcjd",78],
        
      ],
    };
  },
  methods: {
    series(resultSet) {
      console.log(resultSet);
      return resultSet.series().map((series) => ({
        name: series.key, // dimesion name or masurer name
        data: series.series.map((row) => [row.x, row.value]),
        //
      }));
      // console.log(resultSet.series)
    },
  },
  
};
</script>

<style scopped>
.background {
    background: #F3F3FB;
    min-height: 100vh;
  }
  .background-white {
    background: #fff;
  }
  .border-light {
    background: #FFFFFF;
    border-radius: 8px;
  }

</style>