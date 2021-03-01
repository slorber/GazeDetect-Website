---
id: explanation
title: Explanation
sidebar_label: Explanation
hide_table_of_contents: true
---

The algorithm used to track the eyes throughout the various tests are mentioned in detail below.

### Face Tracking

This algorithm works by running a machine learning in order to best determine the face's possible location.
Upon detecting the face, the algorithm then maps out the points of interest across the face, 486 individual points to be exact.
Once the points are mapped more steps are performed.

### Eye Tracking

Once the points are mapped, a series of points are mapped around the pupil of the eye, specifically points 330-349.
However, these are points surrounding the pupil. To find the center of the pupil when moving, the centroid distance of 330-339 (for left eye)
and 340-349 (for right eye) are used.

### Establishing Boundaries

Once the centeral point of each of the pupils are found, the values stored from the initial [calibration](/calibration/introduction.md) section that was mentioned above
are called in order to track the farthest boundaries of the eyes in their movement to try to recreate where the user is looking at the screen.
Using that data, the tests that are later conducted try to track various feaatures of eye mveoment such as acceleration, velocity, accuracy, and more.

### Testing It Out

The processes that take place in the core of the application that make it tick can be relatively complicated and difficult to understand. In order to better illustrate the
the processes and to help you, the user, better understand the algorithm, there is a quick sample on the next page. Either click [here](/tracking/debugging.mdx) or move on the next section to test it
out for yourself.

:::note
In order to test out the algorithm, the app will need access to your camera that is used to track your face, and microphone which is not used.
For the points to be properly rendered, the app will have to be fullscreened, as not doing so adds an offset.
:::
