
async function deleteTask(id) {
    try {
      const response = await fetch(`${BASE_URL}/deleteTask/${id}`);
  
      if (response.status === 204) {
        alert("Deleted successfully");
      } else {
        const info = await response.json();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
    window.location.reload();
  }
  