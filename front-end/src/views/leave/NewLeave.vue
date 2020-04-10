<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>New Leave Request</v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="6">
                  <v-select :items="typeOfLeave" v-model="leaveType" label="Type of Leave?"></v-select>
                  <v-text-field label="Role" disabled></v-text-field>
                  <v-text-field label="Additional Role"></v-text-field>
                  <v-select :items="supportStaff" label="Are you Support Staff?"></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Start Date" v-model="leaveDates[0]"></v-text-field>
                  <v-text-field label="End Date" v-model="leaveDates[1]"></v-text-field>
                  <v-text-field label="Number of Days" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-date-picker
                    v-model="leaveDates"
                    label="Date Range"
                    landscape
                    range
                    :header-color="leaveType == 'Annual Leave' || leaveType == 'Long Service Leave' ? 'orange' : '#003263'"
                    full-width
                  ></v-date-picker>
                </v-col>
                <v-col cols="12">
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-textarea label="Reason for Leave" outlined></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" outlined>Cancel</v-btn>
            <v-btn color="success" outlined>Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//Type of Leave
//Select your Role
//Addtional Role if applicable
//Choose the person you report to directly
//Select if you are support staff
//Number days leave
//Start Date
//End Date
//Reason for Leave
//Attach files

export default {
  data: () => {
    return {
      leaveDates: [
        new Date().toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10)
      ],

      typeOfLeave: [
        "Annual Leave",
        "Sick Leave",
        "Carers Leave",
        "Unpaid Leave",
        "Long Service Leave"
      ],
      supportStaff: ["No", "Yes"],
      leaveType: null
    };
  }
};
</script>

<style>
</style>