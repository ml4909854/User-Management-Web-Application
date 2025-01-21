document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("AddBtn");
    const formContainer = document.getElementById("formContainer");
    const userForm = document.getElementById("userForm");
    const cancelButton = document.getElementById("cancelButton");
    const userDisplayList = document.getElementById("userDisplayList");
    const saveButton = document.getElementById("saveButton");
    let currentUserId = null;

    // Function to fetch data from the API
    async function fetchData() {
      const api = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await fetch(api);
        const userData = await response.json();
        showData(userData);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    }

    // Function to display users data in the UI
    function showData(userData) {
      userDisplayList.innerHTML = ""; // Clear current list
      userData.forEach((user) => {
        let div = document.createElement("div");
        div.classList.add("user-card");

        let id = document.createElement("p");
        id.innerHTML = `Id: ${user.id}`;

        let name = document.createElement("p");
        name.innerHTML = `Name: ${user.name}`;

        let email = document.createElement("p");
        email.innerHTML = `Email: ${user.email}`;

        let department = document.createElement("p");
        department.innerHTML = `Department: ${user.company.name}`;

        let parentDiv = document.createElement("P")
        parentDiv.classList.add("button-div")

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", () => editUser(user));

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteUser(user.id));

        parentDiv.append(editButton ,deleteButton )
        div.append(id, name, email, department, parentDiv);
        userDisplayList.append(div);
      });
    }

    // Function to open the form for editing a user
    function editUser(user) {
      currentUserId = user.id;
      document.getElementById("firstName").value = user.name.split(" ")[0];
      document.getElementById("lastName").value = user.name.split(" ")[1];
      document.getElementById("email").value = user.email;
      document.getElementById("department").value = user.company.name;
      formContainer.style.display = "block";
    }

    // Function to delete a user
    function deleteUser(id) {
      const api = `https://jsonplaceholder.typicode.com/users/${id}`;
      fetch(api, { method: "DELETE" })
        .then(() => {
          alert("User deleted");
          fetchData(); // Fetch updated data to simulate deletion
        })
        .catch((error) => {
          alert("Error deleting user");
          console.log("Error deleting user:", error.message);
        });
    }

    // Add new user button toggle form visibility
    addBtn.addEventListener("click", () => {
      formContainer.style.display = "block";  // Show form
      userForm.reset();
      currentUserId = null;
    });

    // Cancel button to hide the form
    cancelButton.addEventListener("click", () => {
      userForm.reset();
      formContainer.style.display = "none";  // Hide form
    });

    // Save button to add or update user
    saveButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form submission

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const department = document.getElementById("department").value;

      const userData = {
        name: `${firstName} ${lastName}`,
        email: email,
        company: { name: department },
      };

      if (currentUserId) {
        const api = `https://jsonplaceholder.typicode.com/users/${currentUserId}`;
        fetch(api, {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            alert("User updated");
            fetchData(); 
            formContainer.style.display = "none"; 
          })
          .catch((error) => {
            alert("Error updating user");
            console.log("Error updating user:", error.message);
          });
      } else {
        // Add new user
        const api = "https://jsonplaceholder.typicode.com/users";
        fetch(api, {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            alert("User added");
            fetchData(); // Fetch updated data after adding
            formContainer.style.display = "none"; // Hide form
          })
          .catch((error) => {
            alert("Error adding user");
            console.log("Error adding user:", error.message);
          });
      }
    });

    // Initial fetch of users when page loads
    fetchData();
  });

 