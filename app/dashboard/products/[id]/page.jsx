import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label htmlFor="">Price</label>
          <input type="email" name="price" placeholder="JohnDoe@gmail.com" />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder="red" />
          <label htmlFor="">Size</label>
          <textarea type="text" name="size" id="" cols="30" rows="10" />
          <label htmlFor="">Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="description"
          ></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
