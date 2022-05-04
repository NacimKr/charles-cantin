import React from 'react'

const Contact = () => {
  return (
    <>
      <form class=" container mt-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Votre nom</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Votre Email</label>
          <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        <label for="floatingTextarea">Votre message</label>
        <div class="form-floating my-3">
          <textarea class="form-control" placeholder="Leave a comment here" style={{resize:"none", height:"250px"}} id="floatingTextarea" ></textarea>
        </div>

        <button type="submit" class="btn btn-secondary d-block mx-auto px-5">Envoyer</button>
      </form>
    </>
  )
}

export default Contact