
<style>
  @import './AddPlane.css';
</style>

<template>

  <div class="container scroll-to-me">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h1>Plane Dashboard ✈️</h1>
            <div class="form-container"> 
                <h2>Add Plane</h2>
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Plane Number </label>
                            <input type="text" class="form-control" v-model="planeNumber" placeholder="Plane001" name="planenumber" id="planenumber" />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Departure </label>
                            <input type="text" class="form-control" v-model="departure" placeholder="JFK" name="departure" id="departure" />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Destination </label>
                            <input type="text" class="form-control" v-model="destination" placeholder="BWI"  name="destination" id="destination" />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Status </label> <br>
                            <select class="form-control status-dropdown" v-model="status">
                                <option value="ARRIVED">ARRIVED</option>
                                <option value="BOARDING">BOARDING</option>
                                <option value="CANCELLED">CANCELLED</option>
                                <option value="DELAYED">DELAYED</option>c
                                <option value="GATE CLOSING">GATE CLOSING</option>
                                <option value="LANDED">LANDED</option>
                            </select>
                            <br>

                            <!-- <input type="text" class="form-control" v-model="status" placeholder="DELAYED" name="status" id="status" /> -->
                        </div>
                    </div>
                    <button type="button" @click='addPlane()' class="btn btn-danger">Create</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'AddPlane',
  data() {
    return {
      planeNumber: '',
      departure: '',
      destination: '',
      status: ''
    }
  },
  methods: {
      addPlane() {
          console.log(this.planeNumber)
          const payload = {
              plane_number: this.planeNumber,
              departure: this.departure,
              destination: this.destination,
              status: this.status

          }
          this.$emit('addPlane', payload)
          this.clearForm();
      },
      clearForm() {
          this.planeNumber = "";
          this.departure = "";
          this.destination = "";
          this.status = "";
      }
  }
}
</script>