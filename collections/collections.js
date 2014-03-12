entrySchema = new SimpleSchema({
    title: {
      type: String,
      label: "Title",
      max: 200
    },
    content: {
      type: String,
      label: "Content",
    },
    excerpt: {
      type: String,
      label: "Excerpt",
      optional: true,
      max: 300
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      label: "Created At",
    },
    updatedAt: {
      type: [Date],
      label: "Updated At",
      minCount: 1
    },
    author: {
      type: Object,
      label: "Author"
    },
});


Posts = new Meteor.Collection("posts", {
  schema: new SimpleSchema([entrySchema, {

    slug: {
      type: String,
      label: "URL Slug",
    },

  }])
});

SimpleSchema.messages({
  "reservedSlug": "That url slug is reserved for posts"
});

Pages = new Meteor.Collection("pages", {
  schema: new SimpleSchema([entrySchema, {

    slug: {
      type: String,
      label: "URL Slug",
      custom: function() {
        if(!isValidSlug(this.value)) {
          return 'reservedSlug';
        }
      }
    },

  }])
});

//Comments = new Meteor.Collection("comments", {
//  schema: new SimpleSchema([entrySchema, {
//
//  }])
//});

