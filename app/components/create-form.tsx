"use client"

import React from 'react';
import { saveContact } from '@/lib/action';
import { useFormState } from "react-dom";
import { SubmitButton } from './buttons';

const CreateForm = () => {
const [state, formAction] = useFormState(saveContact, null);

  return (
      <div>
          <form action={formAction}>
              <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder='Full Name' />
                  <div id="name-error" aria-live='polite' aria-atomic="true">
                      <p className="mt-2 text-sm text-red-500">{state?.Error?.name }</p>
                  </div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="text" name="phone" id="phone" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder='Phone number..' />
                  <div id="phone-error" aria-live='polite' aria-atomic="true">
                      <p className="mt-2 text-sm text-red-500">{state?.Error?.phone }</p>
                  </div>
                  <div id="message-error" aria-live='polite' aria-atomic="true">
                      <p className="mt-2 text-sm text-red-500">{state?.message }</p>
                  </div>
              </div>
              <SubmitButton label="save" />
          </form>
    </div>
  )
}

export default CreateForm