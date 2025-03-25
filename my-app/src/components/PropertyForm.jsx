export default function PropertyForm({ property, createProperty, handleChange, handleFileChange }) {
  return (
      <div className="property-form-container">
          <h2 className="property-form-title">Create new property</h2>
          <form className="property-form" onSubmit={(e) => createProperty(e)}>
              <div className="form-group">
                  <label className="form-label" htmlFor="title">Title</label>
                  <input
                      className="form-input"
                      type="text"
                      name="title"
                      value={property.title}
                      onChange={handleChange}
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="form-label" htmlFor="description">Description</label>
                  <input
                      className="form-input"
                      type="text"
                      name="description"
                      value={property.description}
                      onChange={handleChange}
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="form-label" htmlFor="city">City</label>
                  <input
                      className="form-input"
                      type="text"
                      name="city"
                      value={property.city}
                      onChange={handleChange}
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="form-label" htmlFor="rooms">Rooms</label>
                  <input
                      className="form-input"
                      type="number"
                      name="rooms"
                      value={property.rooms}
                      onChange={handleChange}
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="form-label" htmlFor="price">Price</label>
                  <input
                      className="form-input"
                      type="number"
                      name="price"
                      value={property.price}
                      onChange={handleChange}
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="form-label" htmlFor="images">Images</label>
                  <input
                      className="form-input-file"
                      type="file"
                      name="images"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                  />
              </div>

              <button className="property-submit-button" type="submit">Create property</button>
          </form>
      </div>
  );
}