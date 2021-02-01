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
                  <td>{{ item.planeObject.status }}</td>
                  <td> <button @click="updatePlane(item)">Update</button> <button @click="deletePlane(item)" class="delete-button" >Delete</button></td>
              </tr>
            </tbody>
        </table>
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
            status: ''
            }
        },
        props: ['planes'],
        methods: {
            updatePlane(data) {
                const payload = {
                    _id: data._id,
                    _rev: data._rev,
                    planeObject : {
                        plane_number: data.planeObject.plane_number,
                        departure: data.planeObject.departure,
                        destination: data.planeObject.destination,
                        status: "ON TIME" //TODO make this dynamic
                    }
                }
                this.$emit('updatePlane', payload)
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