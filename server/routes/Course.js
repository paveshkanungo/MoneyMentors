// import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Course Controllers Input
const {
    createCourse,
    getAllCourses,
    getCourseDetails,
    getFullCourseDetails,
    editCourse,
    getInstructorCourses,
    deleteCourse,
} = require("../controllers/Course");

// Categories Controllers Input
const {
    showAllCategory,
    createCategory,
    categoryPageDetails,
} = require("../controllers/Category");

// Section Controllers Input
const {
    createSection,
    updateSection,
    deleteSection
} = require("../controllers/Section");

// SubSection Controllers Input
const {
    createSubSection,
    updateSubSection,
    deleteSubSection,
} = require("../controllers/SubSection");

// Rating Controllers Input
const {
    createRating,
    getAverageRating,
    getAllRating,
} = require("../controllers/RatingAndReview");

const {
    updateCourseProgress
  } = require("../controllers/courseProgress");

// Importing Middlewares
const {auth, isInstructor, isStudent, isAdmin} = require("../middlewares/auth");

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse);
// Add a Section to a course
router.post("/addSection", auth, isInstructor, createSection);
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection);
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection);
// Edit SubSection
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
// Delete SubSection
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
// Add a SubSection to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection);
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses);
// Get details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails);
// Get details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse);
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
// Delete a Course
router.delete("/deleteCourse", deleteCourse);

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);



// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

module.exports = router;

