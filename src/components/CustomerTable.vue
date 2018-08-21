<template>
<div>
    <v-toolbar flat color="white">
        <v-toolbar-title>Customers</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" color="primary" dark class="mb-2">New Customer</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.firstName" label="First name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.carrier" label="carrier"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.policyNo" label="policyNo"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.inceptionDate" label="inceptionDate"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.payDay" label="payDay"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.policyStatus" label="policyStatus"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.pendingItems" label="pendingItems"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.notes" label="notes"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.agent" label="agent"></v-text-field>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="customers" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
            <td>{{ props.item.firstName }}</td>
            <td class="text-xs-right">{{ props.item.lastName }}</td>
            <td class="text-xs-right">{{ props.item.phone }}</td>
            <td class="text-xs-right">{{ props.item.carrier }}</td>
            <td class="text-xs-right">{{ props.item.policyNo }}</td>
            <td class="text-xs-right">{{ props.item.inceptionDate }}</td>
            <td class="text-xs-right">{{ props.item.payDay }}</td>
            <td class="text-xs-right">{{ props.item.policyStatus }}</td>
            <td class="text-xs-right">{{ props.item.pendingItems }}</td>
            <td class="text-xs-right">{{ props.item.notes }}</td>
            <td class="text-xs-right">{{ props.item.agent }}</td>

            <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                </v-icon>
                <v-icon small @click="deleteItem(props.item)">
                    delete
                </v-icon>
            </td>
        </template>
        <template slot="no-data">
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>
</div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "First Name",
        align: "left",
        sortable: false,
        value: "firstName" + "lastName"
      },
      {
        text: "last Name",
        value: "lastName"
      },
      {
        text: "phone",
        value: "phone"
      },
      {
        text: "carrier",
        value: "carrier"
      },
      {
        text: "policyNo",
        value: "policyNo"
      },
      {
        text: "inceptionDate",
        value: "inceptionDate"
      },
      {
        text: "payDay",
        value: "payDay"
      },
      {
        text: "policyStatus",
        value: "policyStatus"
      },
      {
        text: "pendingItems",
        value: "pendingItems"
      },
      {
        text: "notes",
        value: "notes"
      },
      {
        text: "agent",
        value: "agent"
      },
      {
        text: "Actions",
        value: "firstName",
        sortable: false
      }
    ],
    customerData: {},
    customers: [],
    editedIndex: -1,
    editedItem: {
      firstName: "",
      lastName: "",
      phone: 0,
      carrier: "",
      policyNo: "",
      inceptionDate: "",
      payDay: "",
      policyStatus: "",
      pendingItems: [],
      notes: [],
      agent: ""
    },
    defaultItem: {
      firstName: "",
      lastName: "",
      phone: 0,
      carrier: "",
      policyNo: "",
      inceptionDate: "",
      payDay: "",
      policyStatus: "",
      pendingItems: [],
      notes: [],
      agent: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Customer" : "Edit Customer";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      console.log("customerssss");

      console.log(this.customerData);

      // this.customers = [{
      //         firstName: 'Frozen Yogurt',
      //         lastName: 159,
      //         phone: 6.0,
      //         carrier: 24,
      //         policyNo: 4.0
      //     },
      //     {
      //         firstName: 'Ice cream sandwich',
      //         lastName: 237,
      //         phone: 9.0,
      //         carrier: 37,
      //         policyNo: 4.3
      //     },
      //     {
      //         firstName: 'Eclair',
      //         lastName: 262,
      //         phone: 16.0,
      //         carrier: 23,
      //         policyNo: 6.0
      //     },
      //     {
      //         firstName: 'Cupcake',
      //         lastName: 305,
      //         phone: 3.7,
      //         carrier: 67,
      //         policyNo: 4.3
      //     },
      //     {
      //         firstName: 'Gingerbread',
      //         lastName: 356,
      //         phone: 16.0,
      //         carrier: 49,
      //         policyNo: 3.9
      //     },
      //     {
      //         firstName: 'Jelly bean',
      //         lastName: 375,
      //         phone: 0.0,
      //         carrier: 94,
      //         policyNo: 0.0
      //     },
      //     {
      //         firstName: 'Lollipop',
      //         lastName: 392,
      //         phone: 0.2,
      //         carrier: 98,
      //         policyNo: 0
      //     },
      //     {
      //         firstName: 'Honeycomb',
      //         lastName: 408,
      //         phone: 3.2,
      //         carrier: 87,
      //         policyNo: 6.5
      //     },
      //     {
      //         firstName: 'Donut',
      //         lastName: 452,
      //         phone: 25.0,
      //         carrier: 51,
      //         policyNo: 4.9
      //     },
      //     {
      //         firstName: 'KitKat',
      //         lastName: 518,
      //         phone: 26.0,
      //         carrier: 65,
      //         policyNo: 7
      //     }
      // ]
    },

    editItem(item) {
      this.editedIndex = this.customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.customers.indexOf(item);
      confirm("Are you sure you want to delete this customer?") &&
        this.customers.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.customers[this.editedIndex], this.editedItem);
      } else {
        this.customers.push(this.editedItem);
      }
      this.close();
    },
    getCustomers() {
      // firstName:,
      // lastName:,
      // phone:,
      // carrier:,
      // policyNo:,
      // inceptionDate:,
      // payDay:'',
      // policyStatus:,
      // pendingItems:'',
      // notes:'',
      // agent:,
    }
  },
  created() {
      let self = this;
    axios
      .get("api/customerlist")
      .then(function(res) {
         
        let customers = JSON.parse(res.data[0]);
        let vehicles = JSON.parse(res.data[1]);
        self.customerData = customers
        console.log(customers[0].customer.first_name);
       

      
      })
      .catch(function(err) {
        console.log(err);
      });
     
  },
  mounted() {
       
  }
};
</script>
