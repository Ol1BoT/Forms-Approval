<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Leave Form</v-card-title>
          <v-card-text>View and request leave</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="secondary" to="/view-leave">View my submissions</v-btn>
            <v-btn outlined color="success" to="/new-leave">Request Leave</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>PD Form</v-card-title>
          <v-card-text>View and request Professional Development</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="secondary" to="view-pd">View my submissions</v-btn>
            <v-btn outlined color="success">Request PD</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>My Admin Area</v-card-title>
          <v-card-text>Submissions that need my attention</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="secondary">My Admin Panel</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Super Admin Area</v-card-title>
          <v-card-text>View all submissions</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="secondary" to="/saa">SAA Panel</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => {
    return {};
  },
  name: "Home"
};
</script>
