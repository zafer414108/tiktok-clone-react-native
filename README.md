# TikTok Clone UI | React native 
# Imports: 
The necessary dependencies and components are imported, including React, various React Native modules, and the gesture handling and animation libraries.

# Constants:
The assets array contains image sources, and snapPoints is an array of snap points for the animation based on the height of the device window.

# Component Functionality:

The useClock, usePanGestureHandler, and useValue hooks from react-native-redash are used to manage animation-related states.

The PanGestureHandler is used to handle pan gestures, and its properties (gestureHandler, state, velocity, and translation) are destructured from the usePanGestureHandler hook.

The useCode hook is used to execute Reanimated code. The code inside it updates the translateY value based on user gestures and handles the animation logic when the gesture ends.

The main content of the component is wrapped in a PanGestureHandler component, and the images are mapped inside an AnimatedView with translation applied to create a swipe effect.

# Rendering: 
The component renders a container (<Container>), which contains the main content wrapped in a PanGestureHandler. 
The images are displayed in an animated view with additional components like PostInfo and Actions associated with each image.

# Styles: 
The styles for the component are not included in the provided code snippet (<Container>, <AnimatedView>, <Pictures>, <Picture>, and <Image>), but they are used to apply styles to different elements of the UI.

# require_relative Statements:

require_relative '../node_modules/react-native/scripts/react_native_pods': This line includes the configuration for React Native pods. It is a standard inclusion to set up React Native dependencies in your iOS project.

require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules': This line includes native modules from the React Native Community CLI. It's another standard inclusion for native modules.


Specifies the minimum iOS version required for your project.
target 'tiktokClone' do:

Begins the configuration block for your main target named 'tiktokClone'.
config = use_native_modules!:

Uses native modules specified in the configuration. It's a standard inclusion for React Native projects.
use_react_native!(:path => config["reactNativePath"]):

Configures the React Native dependency. It's a standard inclusion for React Native projects, ensuring that the React Native library is properly integrated into your iOS project.
target 'tiktokCloneTests' do:

Begins the configuration block for the target used for testing.
inherit! :complete:

Inherits the configurations from the main target ('tiktokClone') to the test target ('tiktokCloneTests').
# use_flipper!:

Enables Flipper, a platform for mobile app development debugging. Flipper is commonly used in React Native projects for debugging purposes.
# post_install do |installer|:

Defines a post-installation block where additional configurations can be applied. In this case, it calls flipper_post_install(installer) to ensure proper Flipper integration.
Screen gif 
![ezgif com-resize (7)](https://github.com/zafer414108/tiktok-clone-react-native/assets/147662873/3161eef0-4e1b-43e6-8949-064128016a4a)
