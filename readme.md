 Steps to Run the Code

1. **Create a Folder:**
   - Name it "node-projects".

2. **Clone the Git Repository:**
   - Navigate to the "node-projects" folder.
   - Clone the repository using the following URL: [https://github.com/abhinwal/registration-page-backend](https://github.com/abhinwal/registration-page-backend).

3. **Open a New Terminal:**

4. **Set Node Version:**
   - Ensure you are using Node version v16.20.2.
   - Run: `nvm use v16.20.2` (If this version is not available, install it first).

5. **Start MongoDB:**
   - Open MongoDB and connect to `localhost:27017`.

6. **Run the Server:**
   - In the terminal, navigate to the cloned repository.
   - Execute: `node server.js`.

7. **Check Terminal Output:**
   - You should see:
     ```
     started
     Successfully connected to DB
     ```
   - This indicates your backend is connected to the database.

8. **Test with Postman:**
   - Open Postman.
   - Send a POST request to `http://localhost:9992/student/create` with the following raw JSON body:
     ```json
     {
         "registrationType": "Full Registration",
         "registrationCategory": "FHRAI Member",
         "membershipNo": "MEM123456",
         "nameOfOrganisation": "Example Corporation",
         "addressLine1": "1234 Main St",
         "addressLine2": "Suite 500",
         "addressLine3": "",
         "city": "Metropolis",
         "pincode": "12345",
         "state": "ExampleState",
         "phone": "9876543210",
         "gstNo": "12ABCDE3456F1Z9",
         "panNo": "ABCDE1234F",
         "legalNameOfBusiness": "Example Corp Legal Name",
         "emailIdForCommunication": "unique.email@example.com",
         "hotelAccommodation": "Required",
         "pickUpAndDrop": "Not Required",
         "title": "Dr.",
         "name": "John Doe",
         "designation": "Director",
         "mobile": "9876543210",
         "age": 45,
         "gender": "Male",
         "relation": "Self"
     }
     ```

9. **Send the Request:**
   - Click "Send" in Postman.

10. **Verify Data in MongoDB:**
    - Open MongoDB.
    - Under the `gbs` database, find the `student` collection.
    - Click "Reload".
    - You should see your data.

