import { Client, Events, GatewayIntentBits, Partials } from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import { useAppStore } from '@/store/app'
import { loadCommands, loadEvents } from '@/core/loader'


vueInit()
dotenv.config()
loadCommands()
const client = new Client({
	intents: [GatewayIntentBits.Guilds,
			   GatewayIntentBits.GuildMessages, 
			   GatewayIntentBits.GuildMessageReactions],
	partials: [Partials.Message,
			    Partials.Channel,
				Partials.Reaction],
});

const appStore = useAppStore()
appStore.client = client
loadEvents()


client.on(Events.MessageReactionAdd, async(reaction, user) => {
	if (user.bot) return;
	const messageId = reaction.message.id;
	const channelId = reaction.message.channelId;
	if(channelId === '1273935135984848926'){	// 身分組領取 頻道
		if (messageId === '1273935345200791613') {	// 成員
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 雲科人
					await targetUser.roles.remove('1273936557958496268');
					await targetUser.roles.add('1273936738351448155');break;
				case '1️⃣': // 大一
					await targetUser.roles.add('1273979968195526656');break;
				case '2️⃣': // 大二
					await targetUser.roles.add('1273979969218809866');break;
				case '3️⃣': // 大三
					await targetUser.roles.add('1273979969726447719');break;
				case '4️⃣': // 大四
					await targetUser.roles.add('1273980455074664448');break;
				case '5️⃣': // 其他學校
					await targetUser.roles.remove('1273936738351448155');
					await targetUser.roles.add('1273936557958496268');break;
				case '6️⃣': // 畢業
					await targetUser.roles.add('1274018305895829638');break;
				default:break;
			}
		}
		if (messageId === '1273974416195453012') {	// 設計
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 數媒
					await targetUser.roles.add('1273979233844203553');break;
				case '1️⃣': // 視傳
					await targetUser.roles.add('1273979408197095497');break;
				case '2️⃣': // 建築
					await targetUser.roles.add('1273979464597897342');break;
				case '3️⃣': // 工設
					await targetUser.roles.add('1273979568553988106');break;
				case '4️⃣': // 創設
					await targetUser.roles.add('1273979658387460209');break;
				case '5️⃣': // 跨設
					await targetUser.roles.add('1273979704482988122');break;
				default:break;
			}
		}
		if (messageId === '1273974732894502976') {	// 工程
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 資工
					await targetUser.roles.add('1273979731666141288');break;
				case '1️⃣': // 電機
					await targetUser.roles.add('1273979742995087491');break;
				case '2️⃣': // 電子
					await targetUser.roles.add('1273979745343635466');break;
				case '3️⃣': // 機械
					await targetUser.roles.add('1273979755196186624');break;
				case '4️⃣': // 環安
					await targetUser.roles.add('1273979755955486730');break;
				case '5️⃣': // 化材
					await targetUser.roles.add('1273979757301727242');break;
				case '6️⃣': // 營建
					await targetUser.roles.add('1273979757691666453');break;
				default:break;
			}
		}
		if (messageId === '1273975068468445185') {	// 管理
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 企管
					await targetUser.roles.add('1273979759512129539');break;
				case '1️⃣': // 工管
					await targetUser.roles.add('1273979760510373928');break;
				case '2️⃣': // 資管
					await targetUser.roles.add('1273979761575592067');break;
				case '3️⃣': // 財金
					await targetUser.roles.add('1273979962164248577');break;
				case '4️⃣': // 會計
					await targetUser.roles.add('1273979962671628353');break;
				case '5️⃣': // 國管
					await targetUser.roles.add('1273979963514814545');break;
				case '6️⃣': // 其他管理系所
					await targetUser.roles.add('1273979964055752764');break;
				default:break;
			}
		}
		if (messageId === '1273975988434374746') {	// 人科
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 應外
					await targetUser.roles.add('1273979964659597384');break;
				case '1️⃣': // 文資系
					await targetUser.roles.add('1273979965674623122');break;
				case '2️⃣': // 其他人科
					await targetUser.roles.add('1273979966593302569');break;
				default:break;
			}
		}
		if (messageId === '1273976230168891403') {	// 未來
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 未來
					await targetUser.roles.add('1273979967226646540');break;
				default:break;
			}
		}
	}
  });

  client.on(Events.MessageReactionRemove, async(reaction, user) => {
	if (user.bot) return;
	const messageId = reaction.message.id;
	const channelId = reaction.message.channelId;
	if(channelId === '1273935135984848926'){
		if (messageId === '1273935345200791613') {	// 成員
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣':
					await targetUser.roles.remove('1273936738351448155');break;
				case '1️⃣': // 大一
					await targetUser.roles.remove('1273979968195526656');break;
				case '2️⃣': // 大二
					await targetUser.roles.remove('1273979969218809866');break;
				case '3️⃣': // 大三
					await targetUser.roles.remove('1273979969726447719');break;
				case '4️⃣': // 大四
					await targetUser.roles.remove('1273980455074664448');break;
				case '5️⃣': // 其他學校
					await targetUser.roles.remove('1273936557958496268');break;
				case '6️⃣': // 畢業
					await targetUser.roles.remove('1274018305895829638');break;
				default:break;
			}
		}
		if (messageId === '1273974416195453012') {	// 設計
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 數媒
					await targetUser.roles.remove('1273979233844203553');break;
				case '1️⃣': // 視傳
					await targetUser.roles.remove('1273979408197095497');break;
				case '2️⃣': // 建築
					await targetUser.roles.remove('1273979464597897342');break;
				case '3️⃣': // 工設
					await targetUser.roles.remove('1273979568553988106');break;
				case '4️⃣': // 創設
					await targetUser.roles.remove('1273979658387460209');break;
				case '5️⃣': // 跨設
					await targetUser.roles.remove('1273979704482988122');break;
				default:break;
			}
		}
		if (messageId === '1273974732894502976') {	// 工程
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 資工
					await targetUser.roles.remove('1273979731666141288');break;
				case '1️⃣': // 電機
					await targetUser.roles.remove('1273979742995087491');break;
				case '2️⃣': // 電子
					await targetUser.roles.remove('1273979745343635466');break;
				case '3️⃣': // 機械
					await targetUser.roles.remove('1273979755196186624');break;
				case '4️⃣': // 環安
					await targetUser.roles.remove('1273979755955486730');break;
				case '5️⃣': // 化材
					await targetUser.roles.remove('1273979757301727242');break;
				case '6️⃣': // 營建
					await targetUser.roles.remove('1273979757691666453');break;
				default:break;
			}
		}
		if (messageId === '1273975068468445185') {	// 管理
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 企管
					await targetUser.roles.remove('1273979759512129539');break;
				case '1️⃣': // 工管
					await targetUser.roles.remove('1273979760510373928');break;
				case '2️⃣': // 資管
					await targetUser.roles.remove('1273979761575592067');break;
				case '3️⃣': // 財金
					await targetUser.roles.remove('1273979962164248577');break;
				case '4️⃣': // 會計
					await targetUser.roles.remove('1273979962671628353');break;
				case '5️⃣': // 國管
					await targetUser.roles.remove('1273979963514814545');break;
				case '6️⃣': // 其他管理系所
					await targetUser.roles.remove('1273979964055752764');break;
				default:break;
			}
		}
		if (messageId === '1273975988434374746') {	// 人科
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 應外
					await targetUser.roles.remove('1273979964659597384');break;
				case '1️⃣': // 文資系
					await targetUser.roles.remove('1273979965674623122');break;
				case '2️⃣': // 其他人科
					await targetUser.roles.remove('1273979966593302569');break;
				default:break;
			}
		}
		if (messageId === '1273976230168891403') {	// 未來
			// 獲取表情符號
			const emoji = reaction.emoji.name;
			const targetUser = await reaction.message.guild.members.fetch(user.id);
			// 根據表情符號設置對應的身分組
			switch (emoji) {
				case '0️⃣': // 未來
					await targetUser.roles.remove('1273979967226646540');break;
				default:break;
			}
		}
	}
	
  });
client.login(process.env.TOKEN);