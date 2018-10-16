define({ "api": [
  {
    "type": "post",
    "url": "/create-profile",
    "title": "Create Profile [POST]",
    "group": "Profile",
    "description": "<p>This api is used to create a profile.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_address",
            "description": "<p>Mobile Address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>company of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"address\": \"<address>\",\n  \"company\": \"<company>\",\n  \"title\": \"<title>\",\n  \"interest\": [],\n  \"_id\": \"<id>\",\n  \"name\": \"<name>\",\n  \"email\": \"<email>\",\n  \"mobile_number\": \"8004913901\",\n  \"user_id\": 34,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n  <message>\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"Could not create the user.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/create-profile.js",
    "groupTitle": "Profile",
    "name": "PostCreateProfile"
  },
  {
    "type": "post",
    "url": "/update-interest",
    "title": "Update Profile [POST]",
    "group": "Profile",
    "description": "<p>This api is used to update ineterst of the user.</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>email or id of the user.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "interest",
            "description": "<p>interest of the user.</p>"
          },
          {
            "group": "body",
            "type": "Boolean",
            "optional": false,
            "field": "remove",
            "description": "<p>true if you want to delete the above interest and false if you want to add that interest to the user profile.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"address\": \"<address>\",\n  \"company\": \"<company>\",\n  \"title\": \"<title>\",\n  \"interest\": [<updated interest>],\n  \"_id\": \"<id>\",\n  \"name\": \"<name>\",\n  \"email\": \"<email>\",\n  \"mobile_number\": \"8004913901\",\n  \"user_id\": 34,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n  <message>\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"Could not create the user.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/update-profile.js",
    "groupTitle": "Profile",
    "name": "PostUpdateInterest"
  },
  {
    "type": "post",
    "url": "/update-profile",
    "title": "Update Profile [POST]",
    "group": "Profile",
    "description": "<p>This api is used to create a profile.</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>email or id of the user.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobile_address",
            "description": "<p>Mobile Address of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>company of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"address\": \"<address>\",\n  \"company\": \"<company>\",\n  \"title\": \"<title>\",\n  \"interest\": [],\n  \"_id\": \"<id>\",\n  \"name\": \"<name>\",\n  \"email\": \"<email>\",\n  \"mobile_number\": \"8004913901\",\n  \"user_id\": 34,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n  <message>\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"Could not create the user.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/update-interest.js",
    "groupTitle": "Profile",
    "name": "PostUpdateProfile"
  }
] });
