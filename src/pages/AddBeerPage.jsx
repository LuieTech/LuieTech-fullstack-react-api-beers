import { useForm } from "react-hook-form";
import beerService from "../../services/beer.service";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState:{errors, isValid} } = useForm({
    mode: "onblur"
  })

  const onSubmit = async (data) => {

    const newBeer = await beerService.createBeer(data)
    console.log("this is the created beer data ", newBeer)
    reset()

    navigate('/beers')

  }

  return (

    <form onSubmit={ handleSubmit(onSubmit) } >
      <div className="d-flex border flex-column justify-content-center p-4 m-5 gap-4">    
        {/* Name */}
        <div className="">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className={`form-control ${ errors.name ? 'is-invalid' : ""}`} id="name" placeholder="Beer name" 
            {...register("name", {
              required: "Beer name is required"
            }) }
          />
          {errors.name && <div className="invalid-feedback">This field is required</div>}
        </div>
        {/* Tagline */}
        <div>
          <label htmlFor="Tagline" className="form-label">Tagline</label>
          <input type="text" className="form-control" id="Tagline" placeholder="Tagline"
            {...register("tagline")}
          />
        </div>
        {/* Description */}
        <div className="">
          <label htmlFor="Description" className="form-label">Description</label>
          <textarea className="form-control" id="Description" rows="3" placeholder="Description"
            {...register("description")}
          ></textarea>
        </div>
        {/* First Brewed */}
        <div>
          <label htmlFor="first_brewed" className="form-label">First Brewed</label>
          <input type="text" className="form-control" id="first_brewed" placeholder="First Brewed"
            {...register("first_brewed")}
          />
        </div>
        {/* Brewers Tips */}
        <div>
          <label htmlFor="brewers_tip" className="form-label">Brewers Tip</label>
          <input type="text" className="form-control" id="brewers_tip" placeholder="Brewers Tip"
            {...register("brewers_tips")}
          />
        </div>
              {/* Attenuation Level */}
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">Attenuation Level</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Attenuation Level"
            {...register("attenuation_level")}
          />
        </div>
              {/* Contrinuted by */}
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">Contributed by</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Contributed by"
            {...register("contributed_by")}
          />
        </div>
        <button className="btn btn-success"  type="submit"> Add Beer </button>
      </div>
      
    </form>



  )

}

export default AddBeerPage;
