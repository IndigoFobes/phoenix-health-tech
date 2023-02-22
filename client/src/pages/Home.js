import React from "react";
// import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-5 mb-5 mt-10">
          <h1 className="font-sans font-semibold text-2xl text-blue-900 ">
            The Phoenix Health Technology Solution
          </h1>
        </container>
      </div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
            Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
            ultrices. Integer blandit dui ut laoreet bibendum. Maecenas
            tristique, diam a mollis euismod, nunc erat ultricies orci, vel
            auctor ex nulla in erat. Ut imperdiet, purus a porttitor dignissim,
            nisi neque ultrices eros, a commodo lectus lectus egestas leo. Ut
            quis neque elit. In congue elit rhoncus justo viverra congue. Fusce
            ultricies nisi a lacus gravida, in efficitur est finibus. Aliquam
            varius massa vel mi ornare malesuada. Suspendisse non ante aliquet
            diam bibendum viverra vel id felis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            interdum, dui vitae dapibus gravida, magna justo blandit sapien, nec
            convallis justo ex posuere erat. Curabitur quis dui mauris.
            Vestibulum sollicitudin viverra suscipit.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
            Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
            ultrices. Integer blandit dui ut laoreet bibendum. Maecenas
            tristique, diam a mollis euismod, nunc erat ultricies orci, vel
            auctor ex nulla in erat. Ut imperdiet, purus a porttitor dignissim,
            nisi neque ultrices eros, a commodo lectus lectus egestas leo. Ut
            quis neque elit. In congue elit rhoncus justo viverra congue. Fusce
            ultricies nisi a lacus gravida, in efficitur est finibus. Aliquam
            varius massa vel mi ornare malesuada. Suspendisse non ante aliquet
            diam bibendum viverra vel id felis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            interdum, dui vitae dapibus gravida, magna justo blandit sapien, nec
            convallis justo ex posuere erat. Curabitur quis dui mauris.
            Vestibulum sollicitudin viverra suscipit.
          </p>
        </container>
      </div>
      {/* placeholder icons */}
      <container className="flex justify-around mt-20 mx-60">
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-amber-400 text-5xl mt-1.5"
            icon={icon({
              name: "recycle",
              style: "solid",
            })}
          />
          <h3 className="font-semibold text-xl">All Natural</h3>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-lime-500 text-5xl mt-1.5"
            icon={icon({
              name: "recycle",
              style: "solid",
            })}
          />
          <h3 className="font-semibold text-xl">Green Solution</h3>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-sky-400 text-5xl mt-1.5"
            icon={icon({
              name: "recycle",
              style: "solid",
            })}
          />
          <h3 className="font-semibold text-xl">Prevention First</h3>
        </div>
      </container>
      {/* ***TODO: This is where I'll pass through the Modal, which will be determined via useState */}
      {/* {hover ? (
      <> </> ): null} */}
    </div>
  );
}
