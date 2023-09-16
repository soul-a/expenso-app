import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface TLoginProps {}

export default function LoginScreen(props: TLoginProps) {
  return (
    <View className="flex-1 justify-center items-center mt-4 mb-16">
      <View className="items-center gap-y-4 w-full">
        <Text className="text-2xl font-text">Sign In</Text>

        <Text className="text-4xl font-title">Olá, bem-vindo de volta!</Text>

        <View className="justify-center w-3/4 gap-y-1">
          <Text className="text-lg font-alt">Endereço de E-mail</Text>

          <TextInput
            className="w-full h-14 font-text text-lg rounded-2xl border border-gray-300 p-4 "
            placeholder="Entre com seu e-mail"
            autoComplete="email"
            autoFocus={true}
          />
        </View>

        <View className="justify-center w-3/4 gap-y-1">
          <Text className="text-lg font-alt">Senha</Text>

          <TextInput
            className="w-full h-14 font-text text-lg rounded-2xl border border-gray-300 p-4 "
            placeholder="Entre com sua senha"
            inputMode="text"
            autoComplete="current-password"
            secureTextEntry={true}
          />
        </View>

        <View className="justify-center w-3/4">
          <TouchableOpacity className="bg-[#4F3D56] justify-center items-center h-14 rounded-2xl border border-gray-300">
            <Text className="font-text text-lg text-white">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
