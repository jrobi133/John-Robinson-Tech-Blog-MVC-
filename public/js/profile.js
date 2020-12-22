const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#project-name").value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector("#project-desc").value.trim();

  if (name && description) {
    // (name && needed_funding && description)
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ name, description }),
      // body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  console.log("clicked delete");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log("Other clicked delete");
    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};
const newProjectForm = document.querySelector(".new-project-form");
if (newProjectForm) {
  newProjectForm.addEventListener("submit", newFormHandler);
}
// .addEventListener("submit", newFormHandler);
// document
//   .querySelector(".new-project-form")
//   .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);

document
  .querySelector(".asdf-list")
  .addEventListener("click", delButtonHandler);
