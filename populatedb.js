#! /usr/bin/env node

console.log(
  'This script populates some instances to your database.'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Activity = require("./models/activity");
const Category = require("./models/category");
const City = require("./models/city");
const Organizer = require("./models/organizer");
const Participant = require("./models/participant")

const activities = [];
const categories = [];
const cities = [];
const organizers = [];
const participants = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createCities();
  await createOrganizers();
  await createParticipants();
  await createActivities();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function categoryCreate(name) {
  const category = new Category({ name: name });
  await category.save();
  categories.push(category);
  console.log(`Added category: ${category}`);
}

async function cityCreate(name) {
  const city = new City({ name: name });
  await city.save();
  cities.push(city);
  console.log(`Added city: ${city}`);
}

async function organizerCreate(first_name, last_name) {
  const organizerDetail = { first_name: first_name, last_name: last_name };
  const organizer = new Organizer(organizerDetail);

  await organizer.save();
  organizers.push(organizer);
  console.log(`Added organizer: ${first_name} ${last_name}`);
}

async function participantCreate(first_name, last_name) {
  const participantDetail = { first_name: first_name, last_name: last_name };

  const participant = new Participant(participantDetail);

  await participant.save();
  participants.push(participant);
  console.log(`Added participant: ${first_name} ${last_name}`);
}

async function activityCreate(title, organizer, summary, category, participants, city, season) {
  const activityDetail = {
    title: title,
    organizer: organizer,
    summary: summary,
    category: category,
    participants: participants,
    city: city,
    season: season
  }
  const activity = new Activity(activityDetail);
  await activity.save();
  activities.push(activity)
  console.log(`Added activity: ${title}`)
}


async function createParticipants() {
  console.log("Adding participants");
  await Promise.all([
    participantCreate("John", "Beech"),
    participantCreate("Sally", "Novarte"),
    participantCreate("Victor", "Phelps"),
    participantCreate("Estancia", "Favore"),
    participantCreate("Lupita", "Nuove"),
    participantCreate("Kelly", "Marcus"),
  ])
}

async function createOrganizers() {
  console.log("Adding organizers");
  await Promise.all([
    organizerCreate("Bill", "Bates"),
    organizerCreate("Willum", "Pope"),
    organizerCreate("Francesca", "Lopez"),
    organizerCreate("Arturo", "Lang"),
    organizerCreate("Lupita", "Nuove"),
    organizerCreate("Kelly", "Marcus"),
  ])
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate("Cycling"),
    categoryCreate("Trail Running"),
    categoryCreate("Swimming"),
    categoryCreate("Yoga"),
    categoryCreate("Hiking"),
    categoryCreate("Mountain Biking"),
  ])
}

async function createCities() {
  console.log("Adding cities");
  await Promise.all([
    cityCreate("Scottsdale"),
    cityCreate("Los Angeles"),
    cityCreate("San Diego"),
  ])
}

async function createActivities() {
  console.log("Adding activities");
  await Promise.all([
    activityCreate(
      "Run Wild Papago",
      [organizers[0]],
      "Meet at the southern-most part of the park. We run on small trails up the numerous summits.",
      [categories[1], categories[4]],
      [participants[0], participants[1], participants[2]],
      cities[0],
      "Seasonal"
    ),
    activityCreate(
      "Swim Tempe Town Lake",
      [organizers[1]],
      "High risk swimming. We will go over the same route used in the Ironman",
      [categories[2]],
      [participants[3], participants[4]],
      cities[0],
      "Seasonal"
    ),
    activityCreate(
      "Double Mountain Run",
      [organizers[3]],
      "Summit Piestewa and then Camelback Mountains",
      [categories[1], categories[4]],
      [participants[0], participants[3], participants[5]],
      cities[0],
      "Seasonal"
    ),
    activityCreate(
      "Morning Ocean Swim",
      [organizers[4]],
      "Sunrise swim into the ocean. Meet at dawn.",
      [categories[2]],
      [participants[5], participants[1]],
      cities[1],
      "Year-round"
    ),
    activityCreate(
      "City Ride",
      [organizers[5]],
      "Urban city ride at night. First Tuesday of every month.",
      [categories[0]],
      [participants[1], participants[3]],
      cities[1],
      "Year-round"
    ),
    activityCreate(
      "Hill Repeats",
      [organizers[5]],
      "Hike a series of small hills, on repeat.",
      [categories[4]],
      [participants[0], participants[1], participants[2]],
      cities[2],
      "Seasonal"
    ),
    activityCreate(
      "Off Trail Biking",
      [organizers[3]],
      "Let's take those mountain bikes off trail! Up and over the moutainous terrain.",
      [categories[5]],
      [participants[0], participants[1], participants[2]],
      cities[2],
      "Year-round"
    ),
    activityCreate(
      "Rooftop Yoga Chinatown",
      [organizers[0]],
      "Sunset Salutations on the top floor of the city parking garage on 5th and Main in Chinatown.",
      [categories[3]],
      [participants[2], participants[5]],
      cities[2],
      "Seasonal"
    )

  ])
}
