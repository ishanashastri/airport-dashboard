<style>
  @import './Planes.css';
</style>

<template>
    <div class="plane-container">
        <h2>Planes</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Plane Number</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in planes" :key="item.id">
                  <td>{{ item.planeObject.plane_number }}</td>
                  <td>{{ item.planeObject.departure }}</td>
                  <td>{{ item.planeObject.destination }}</td>
                  <td v-if="isEdit && editPlane._id === item._id"> 
                    <select class="form-control" v-model="newStatus" >
                        <option value="ARRIVED">ARRIVED</option>
                        <option value="BOARDING">BOARDING</option>
                        <option value="CANCELLED">CANCELLED</option>
                        <option value="DELAYED">DELAYED</option>c
                        <option value="GATE CLOSING">GATE CLOSING</option>
                        <option value="LANDED">LANDED</option> 
                    ></select></td>

                    <td v-else>
                        {{ item.planeObject.status }}
                        </td>
                <td v-if="isEdit && editPlane._id === item._id"><button @click="updatePlane(item, newStatus)" class="save-button">Save</button> <button @click="toggleEdit(item)"  class="delete-button" >Cancel</button> </td>
                <td v-else><button @click="toggleEdit(item)">Update</button> <button @click="deletePlane(item)" class="delete-button" >Delete</button></td>

              </tr>
            </tbody>
        </table>
        <template>
</template>

        
    </div>
</template>

<script>
    export default {
        name: 'planes',
        data() {
            return {
            planeNumber: '',
            departure: '',
            destination: '',
            status: '',
            editPlane: null,
            isEdit: false,
            }
        },
        props: ['planes'],
        directives: {
            focus: {
            inserted (el) {
                el.focus()
            }
        }
  },
        methods: {
            toggleEdit(item){
                this.isEdit = !this.isEdit
                this.editPlane=item
            },
            updatePlane(data, newStatus){
                const payload = {
                    _id: data._id,
                    _rev: data._rev,
                    planeObject : {
                        plane_number: data.planeObject.plane_number,
                        departure: data.planeObject.departure,
                        destination: data.planeObject.destination,
                        status: newStatus,
                    }
                }
                this.$emit('updatePlane', payload)
                this.isEdit = false
            },
            deletePlane(data) {
                const payload = {
                    _id: data._id,
                    _rev: data._rev,
                }
                this.$emit('deletePlane', payload )
            }
        }
    }
</script>