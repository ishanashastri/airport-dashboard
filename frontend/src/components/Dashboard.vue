<template>
  <div class="dashboard">
    <Header />
    <div class="container mrgnbtm scroll-to-me">
          <div class="row">
            <div class="col-md-8">
                <AddPlane @addPlane="addPlane($event)" />
            </div>
              <div class="col-md-8">
                <Planes @deletePlane="deletePlane($event)" @updatePlane="updatePlane($event)" v-if="planes.length > 0" :planes="planes" />
            </div>
          </div>
    </div>
    
  </div>
</template>

<script>
import AddPlane from './AddPlane.vue'
import Planes from './Planes.vue'
import { getAllPlanes, addPlane, updatePlane, deletePlane} from '../services/planeServices'

export default {
  name: 'Dashboard',
  components: {
    AddPlane,
    Planes
  },
  data() {
      return {
          planes: [],
          numberOfPlanes: 0
      }
  },
  methods: {
    getAllPlanes() {
      getAllPlanes().then(response => {
        console.log(response)
        response.sort((a, b) => (a.planeObject.plane_number > b.planeObject.plane_number) ? 1 : -1)
        this.planes = response
        this.numberOfPlanes = this.planes.length
      })
    },
    addPlane(data) {
      console.log('adding plane: ', data)
      addPlane(data).then(response => {
        console.log(response);
        this.getAllPlanes();
      });
    },
  updatePlane(data) {
      console.log('updating plane: ', data)
      updatePlane(data).then(response => {
        console.log(response);
        this.getAllPlanes();
      });
    },
  deletePlane(data) {
      deletePlane(data)
      this.getAllPlanes();
    }
  },
  mounted () {
    this.getAllPlanes();
  }
}
</script>