<template>
  <div
    class="modal fade"
    id="newUser"
    aria-labelledby="newUser"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="newUser">
            New User:
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- validation -->
          <div
            v-if="errors"
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Message: </strong> {{ message }}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <!-- form -->
          <form>
            <div class="form-row">
              <div class="col-md">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div class="col-md">
                <datepicker
                  :bootstrap-styling="true"
                  v-model="user.birth"
                  placeholder="Birth Date - Click to open calendar"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            @click.prevent="getInput()"
            type="button"
            class="btn btn-info"
          >
            Save
          </button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  name: "UserModal",
  components: {
    Datepicker,
  },
  data() {
    return {
      user: {
        name: "",
        birth: "",
      },
      errors: "",
    };
  },
  computed: {
    ...mapState("users", ["message"]),
  },
  methods: {
    ...mapActions("users", ["ActionNewUser"]),

    getInput() {
      const dateBirth = moment(this.user.birth).format("YYYY-MM-DD");
      this.ActionNewUser(this.user, dateBirth).then(() => {
        this.errors = "";
        this.success = "";

        if (this.message === "Failed to register user") {
          this.errors = this.message;
        } else {
          this.$router.go();
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
