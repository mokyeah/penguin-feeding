import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Route,
  Routes,
  Link,
  BrowserRouter as Router,
  useActionData,
} from "react-router-dom";
import { doc, updateDoc, increment } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { firestore } from "./firebase";

function info() {
  return (
    <div className=" w-full h-screen flex  flex-col justify-center items-center">
      <div className="text-3xl font-bold font-mono ">why PENGUIN?</div>
      <div>Through this website, I aim to evoke their cherished home. Yet, we must also confront our impact on their well-being.</div>
      <div className="flex-row flex text-xl p-3 first-letter:">
        <Icon
          icon="radix-icons:dot-filled"
          width="30"
          height="30"
          inline={true}
        />
        Habitat Destruction
      </div>
      <div className="flex-row flex text-xl p-3 first-letter:">
        <Icon
          icon="radix-icons:dot-filled"
          width="30"
          height="30"
          inline={true}
        />
        Oil Spills and Pollution
      </div>
      <div className="flex-row flex text-xl p-3 first-letter:">
        <Icon
          icon="radix-icons:dot-filled"
          width="30"
          height="30"
          inline={true}
        />
        Plastic Pollution
      </div>
      <div className="flex-row flex text-xl p-3 first-letter:">
        <Icon
          icon="radix-icons:dot-filled"
          width="30"
          height="30"
          inline={true}
        />
        Overfishing
      </div>
      <div className="flex-row flex text-xl p-3 first-letter:">
        <Icon
          icon="radix-icons:dot-filled"
          width="30"
          height="30"
          inline={true}
        />
        Climate Change
      </div>
      <div className="flex-row flex text-xl p-3 first-letter:">
        <Icon
          icon="radix-icons:dot-filled"
          width="30"
          height="30"
          inline={true}
        />
        Egg Collection and Poaching{" "}
      </div>
      <div className="text-xl p-5">
        Their existence is becoming increasingly challenging with each passing
        day, possibly leading to an eventual extinction.{" "}
      </div>

      <div className="text-3xl text-bold font-mono">What actions can we take? What actions must we take?</div>
    </div>
  );
}

export default info;
