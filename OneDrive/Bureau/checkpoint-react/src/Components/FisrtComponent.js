import React from 'react';

const FirstComponent =() => {
  return(
    <div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Marque</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="marque-voiture" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Couleur</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="coleur-voiture" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Prix</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Prix-voiture" />
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Ajouter</button>
</div>
  </div>
    );
  }

export default FirstComponent;