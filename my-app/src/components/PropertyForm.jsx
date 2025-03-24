export default function PropertyForm({property, createProperty, handleChange, handleFileChange }) {
  return (
    <div className="create-listing-form">
      <h2>Create new property</h2>
      <form onSubmit={(e) => createProperty(e)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={property.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="rooms">Rooms</label>
          <input
            type="number"
            name="rooms"
            value={property.rooms}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="images">Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Create property</button>
      </form>
    </div>
  );
}