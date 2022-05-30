
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

    const [state, handleSubmit] = useForm("xyyoobvz");

    if (state.succeeded) {
        return <p class="text-center">Merci pour votre message</p>;
    }

  return (
    <>
      <form onSubmit={handleSubmit} class=" container mt-5" method="POST">
        
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Votre nom</label>
          <input type="text" class="form-control bg-light border-secondary"  />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label bg-light">Votre Email</label>
          <input type="email" class="form-control bg-light border-secondary" id="exampleInputPassword1" />
        </div>

        <label for="floatingTextarea">Votre message</label>

        <div class="form-floating my-3">
          <textarea name="message" class="form-control bg-light border-secondary" placeholder="Leave a comment here" id="floatingTextarea" style={{resize:"none", height:"250px"}}  ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting} class="btn btn-secondary d-block mx-auto px-5">Envoyer</button>

      </form>
    </>
  )
}

export default Contact